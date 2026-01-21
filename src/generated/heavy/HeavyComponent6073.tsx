'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6073<T> = T extends (infer U)[]
  ? DeepReadonlyArray6073<U>
  : T extends object
  ? DeepReadonlyObject6073<T>
  : T;

interface DeepReadonlyArray6073<T> extends ReadonlyArray<DeepReadonly6073<T>> {}

type DeepReadonlyObject6073<T> = {
  readonly [P in keyof T]: DeepReadonly6073<T[P]>;
};

type UnionToIntersection6073<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6073<T> = UnionToIntersection6073<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6073<T extends unknown[], V> = [...T, V];

type TuplifyUnion6073<T, L = LastOf6073<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6073<TuplifyUnion6073<Exclude<T, L>>, L>;

type DeepPartial6073<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6073<T[P]> }
  : T;

type Paths6073<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6073<K, Paths6073<T[K], Prev6073[D]>> : never }[keyof T]
  : never;

type Prev6073 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6073<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6073 {
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

type ConfigPaths6073 = Paths6073<NestedConfig6073>;

interface HeavyProps6073 {
  config: DeepPartial6073<NestedConfig6073>;
  path?: ConfigPaths6073;
}

const HeavyComponent6073 = memo(function HeavyComponent6073({ config }: HeavyProps6073) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6073) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6073 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6073: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6073.displayName = 'HeavyComponent6073';
export default HeavyComponent6073;
