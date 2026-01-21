'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9172<T> = T extends (infer U)[]
  ? DeepReadonlyArray9172<U>
  : T extends object
  ? DeepReadonlyObject9172<T>
  : T;

interface DeepReadonlyArray9172<T> extends ReadonlyArray<DeepReadonly9172<T>> {}

type DeepReadonlyObject9172<T> = {
  readonly [P in keyof T]: DeepReadonly9172<T[P]>;
};

type UnionToIntersection9172<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9172<T> = UnionToIntersection9172<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9172<T extends unknown[], V> = [...T, V];

type TuplifyUnion9172<T, L = LastOf9172<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9172<TuplifyUnion9172<Exclude<T, L>>, L>;

type DeepPartial9172<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9172<T[P]> }
  : T;

type Paths9172<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9172<K, Paths9172<T[K], Prev9172[D]>> : never }[keyof T]
  : never;

type Prev9172 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9172<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9172 {
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

type ConfigPaths9172 = Paths9172<NestedConfig9172>;

interface HeavyProps9172 {
  config: DeepPartial9172<NestedConfig9172>;
  path?: ConfigPaths9172;
}

const HeavyComponent9172 = memo(function HeavyComponent9172({ config }: HeavyProps9172) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9172) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9172 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9172: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9172.displayName = 'HeavyComponent9172';
export default HeavyComponent9172;
