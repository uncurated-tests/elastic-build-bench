'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9151<T> = T extends (infer U)[]
  ? DeepReadonlyArray9151<U>
  : T extends object
  ? DeepReadonlyObject9151<T>
  : T;

interface DeepReadonlyArray9151<T> extends ReadonlyArray<DeepReadonly9151<T>> {}

type DeepReadonlyObject9151<T> = {
  readonly [P in keyof T]: DeepReadonly9151<T[P]>;
};

type UnionToIntersection9151<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9151<T> = UnionToIntersection9151<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9151<T extends unknown[], V> = [...T, V];

type TuplifyUnion9151<T, L = LastOf9151<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9151<TuplifyUnion9151<Exclude<T, L>>, L>;

type DeepPartial9151<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9151<T[P]> }
  : T;

type Paths9151<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9151<K, Paths9151<T[K], Prev9151[D]>> : never }[keyof T]
  : never;

type Prev9151 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9151<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9151 {
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

type ConfigPaths9151 = Paths9151<NestedConfig9151>;

interface HeavyProps9151 {
  config: DeepPartial9151<NestedConfig9151>;
  path?: ConfigPaths9151;
}

const HeavyComponent9151 = memo(function HeavyComponent9151({ config }: HeavyProps9151) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9151) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9151 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9151: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9151.displayName = 'HeavyComponent9151';
export default HeavyComponent9151;
