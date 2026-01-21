'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2268<T> = T extends (infer U)[]
  ? DeepReadonlyArray2268<U>
  : T extends object
  ? DeepReadonlyObject2268<T>
  : T;

interface DeepReadonlyArray2268<T> extends ReadonlyArray<DeepReadonly2268<T>> {}

type DeepReadonlyObject2268<T> = {
  readonly [P in keyof T]: DeepReadonly2268<T[P]>;
};

type UnionToIntersection2268<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2268<T> = UnionToIntersection2268<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2268<T extends unknown[], V> = [...T, V];

type TuplifyUnion2268<T, L = LastOf2268<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2268<TuplifyUnion2268<Exclude<T, L>>, L>;

type DeepPartial2268<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2268<T[P]> }
  : T;

type Paths2268<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2268<K, Paths2268<T[K], Prev2268[D]>> : never }[keyof T]
  : never;

type Prev2268 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2268<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2268 {
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

type ConfigPaths2268 = Paths2268<NestedConfig2268>;

interface HeavyProps2268 {
  config: DeepPartial2268<NestedConfig2268>;
  path?: ConfigPaths2268;
}

const HeavyComponent2268 = memo(function HeavyComponent2268({ config }: HeavyProps2268) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2268) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2268 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2268: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2268.displayName = 'HeavyComponent2268';
export default HeavyComponent2268;
