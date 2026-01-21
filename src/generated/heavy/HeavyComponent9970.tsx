'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9970<T> = T extends (infer U)[]
  ? DeepReadonlyArray9970<U>
  : T extends object
  ? DeepReadonlyObject9970<T>
  : T;

interface DeepReadonlyArray9970<T> extends ReadonlyArray<DeepReadonly9970<T>> {}

type DeepReadonlyObject9970<T> = {
  readonly [P in keyof T]: DeepReadonly9970<T[P]>;
};

type UnionToIntersection9970<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9970<T> = UnionToIntersection9970<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9970<T extends unknown[], V> = [...T, V];

type TuplifyUnion9970<T, L = LastOf9970<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9970<TuplifyUnion9970<Exclude<T, L>>, L>;

type DeepPartial9970<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9970<T[P]> }
  : T;

type Paths9970<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9970<K, Paths9970<T[K], Prev9970[D]>> : never }[keyof T]
  : never;

type Prev9970 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9970<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9970 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths9970 = Paths9970<NestedConfig9970>;

interface HeavyProps9970 {
  config: DeepPartial9970<NestedConfig9970>;
  path?: ConfigPaths9970;
}

const HeavyComponent9970 = memo(function HeavyComponent9970({ config }: HeavyProps9970) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9970) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9970 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9970: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9970.displayName = 'HeavyComponent9970';
export default HeavyComponent9970;
