'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly851<T> = T extends (infer U)[]
  ? DeepReadonlyArray851<U>
  : T extends object
  ? DeepReadonlyObject851<T>
  : T;

interface DeepReadonlyArray851<T> extends ReadonlyArray<DeepReadonly851<T>> {}

type DeepReadonlyObject851<T> = {
  readonly [P in keyof T]: DeepReadonly851<T[P]>;
};

type UnionToIntersection851<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf851<T> = UnionToIntersection851<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push851<T extends unknown[], V> = [...T, V];

type TuplifyUnion851<T, L = LastOf851<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push851<TuplifyUnion851<Exclude<T, L>>, L>;

type DeepPartial851<T> = T extends object
  ? { [P in keyof T]?: DeepPartial851<T[P]> }
  : T;

type Paths851<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join851<K, Paths851<T[K], Prev851[D]>> : never }[keyof T]
  : never;

type Prev851 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join851<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig851 {
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

type ConfigPaths851 = Paths851<NestedConfig851>;

interface HeavyProps851 {
  config: DeepPartial851<NestedConfig851>;
  path?: ConfigPaths851;
}

const HeavyComponent851 = memo(function HeavyComponent851({ config }: HeavyProps851) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 851) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-851 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H851: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent851.displayName = 'HeavyComponent851';
export default HeavyComponent851;
