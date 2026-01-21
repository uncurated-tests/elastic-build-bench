'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6405<T> = T extends (infer U)[]
  ? DeepReadonlyArray6405<U>
  : T extends object
  ? DeepReadonlyObject6405<T>
  : T;

interface DeepReadonlyArray6405<T> extends ReadonlyArray<DeepReadonly6405<T>> {}

type DeepReadonlyObject6405<T> = {
  readonly [P in keyof T]: DeepReadonly6405<T[P]>;
};

type UnionToIntersection6405<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6405<T> = UnionToIntersection6405<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6405<T extends unknown[], V> = [...T, V];

type TuplifyUnion6405<T, L = LastOf6405<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6405<TuplifyUnion6405<Exclude<T, L>>, L>;

type DeepPartial6405<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6405<T[P]> }
  : T;

type Paths6405<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6405<K, Paths6405<T[K], Prev6405[D]>> : never }[keyof T]
  : never;

type Prev6405 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6405<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6405 {
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

type ConfigPaths6405 = Paths6405<NestedConfig6405>;

interface HeavyProps6405 {
  config: DeepPartial6405<NestedConfig6405>;
  path?: ConfigPaths6405;
}

const HeavyComponent6405 = memo(function HeavyComponent6405({ config }: HeavyProps6405) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6405) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6405 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6405: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6405.displayName = 'HeavyComponent6405';
export default HeavyComponent6405;
