'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly153<T> = T extends (infer U)[]
  ? DeepReadonlyArray153<U>
  : T extends object
  ? DeepReadonlyObject153<T>
  : T;

interface DeepReadonlyArray153<T> extends ReadonlyArray<DeepReadonly153<T>> {}

type DeepReadonlyObject153<T> = {
  readonly [P in keyof T]: DeepReadonly153<T[P]>;
};

type UnionToIntersection153<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf153<T> = UnionToIntersection153<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push153<T extends unknown[], V> = [...T, V];

type TuplifyUnion153<T, L = LastOf153<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push153<TuplifyUnion153<Exclude<T, L>>, L>;

type DeepPartial153<T> = T extends object
  ? { [P in keyof T]?: DeepPartial153<T[P]> }
  : T;

type Paths153<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join153<K, Paths153<T[K], Prev153[D]>> : never }[keyof T]
  : never;

type Prev153 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join153<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig153 {
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

type ConfigPaths153 = Paths153<NestedConfig153>;

interface HeavyProps153 {
  config: DeepPartial153<NestedConfig153>;
  path?: ConfigPaths153;
}

const HeavyComponent153 = memo(function HeavyComponent153({ config }: HeavyProps153) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 153) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-153 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H153: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent153.displayName = 'HeavyComponent153';
export default HeavyComponent153;
