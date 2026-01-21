'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly750<T> = T extends (infer U)[]
  ? DeepReadonlyArray750<U>
  : T extends object
  ? DeepReadonlyObject750<T>
  : T;

interface DeepReadonlyArray750<T> extends ReadonlyArray<DeepReadonly750<T>> {}

type DeepReadonlyObject750<T> = {
  readonly [P in keyof T]: DeepReadonly750<T[P]>;
};

type UnionToIntersection750<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf750<T> = UnionToIntersection750<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push750<T extends unknown[], V> = [...T, V];

type TuplifyUnion750<T, L = LastOf750<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push750<TuplifyUnion750<Exclude<T, L>>, L>;

type DeepPartial750<T> = T extends object
  ? { [P in keyof T]?: DeepPartial750<T[P]> }
  : T;

type Paths750<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join750<K, Paths750<T[K], Prev750[D]>> : never }[keyof T]
  : never;

type Prev750 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join750<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig750 {
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

type ConfigPaths750 = Paths750<NestedConfig750>;

interface HeavyProps750 {
  config: DeepPartial750<NestedConfig750>;
  path?: ConfigPaths750;
}

const HeavyComponent750 = memo(function HeavyComponent750({ config }: HeavyProps750) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 750) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-750 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H750: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent750.displayName = 'HeavyComponent750';
export default HeavyComponent750;
