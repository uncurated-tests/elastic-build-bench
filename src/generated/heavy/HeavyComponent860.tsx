'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly860<T> = T extends (infer U)[]
  ? DeepReadonlyArray860<U>
  : T extends object
  ? DeepReadonlyObject860<T>
  : T;

interface DeepReadonlyArray860<T> extends ReadonlyArray<DeepReadonly860<T>> {}

type DeepReadonlyObject860<T> = {
  readonly [P in keyof T]: DeepReadonly860<T[P]>;
};

type UnionToIntersection860<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf860<T> = UnionToIntersection860<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push860<T extends unknown[], V> = [...T, V];

type TuplifyUnion860<T, L = LastOf860<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push860<TuplifyUnion860<Exclude<T, L>>, L>;

type DeepPartial860<T> = T extends object
  ? { [P in keyof T]?: DeepPartial860<T[P]> }
  : T;

type Paths860<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join860<K, Paths860<T[K], Prev860[D]>> : never }[keyof T]
  : never;

type Prev860 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join860<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig860 {
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

type ConfigPaths860 = Paths860<NestedConfig860>;

interface HeavyProps860 {
  config: DeepPartial860<NestedConfig860>;
  path?: ConfigPaths860;
}

const HeavyComponent860 = memo(function HeavyComponent860({ config }: HeavyProps860) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 860) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-860 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H860: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent860.displayName = 'HeavyComponent860';
export default HeavyComponent860;
