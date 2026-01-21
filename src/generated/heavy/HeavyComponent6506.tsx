'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6506<T> = T extends (infer U)[]
  ? DeepReadonlyArray6506<U>
  : T extends object
  ? DeepReadonlyObject6506<T>
  : T;

interface DeepReadonlyArray6506<T> extends ReadonlyArray<DeepReadonly6506<T>> {}

type DeepReadonlyObject6506<T> = {
  readonly [P in keyof T]: DeepReadonly6506<T[P]>;
};

type UnionToIntersection6506<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6506<T> = UnionToIntersection6506<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6506<T extends unknown[], V> = [...T, V];

type TuplifyUnion6506<T, L = LastOf6506<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6506<TuplifyUnion6506<Exclude<T, L>>, L>;

type DeepPartial6506<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6506<T[P]> }
  : T;

type Paths6506<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6506<K, Paths6506<T[K], Prev6506[D]>> : never }[keyof T]
  : never;

type Prev6506 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6506<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6506 {
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

type ConfigPaths6506 = Paths6506<NestedConfig6506>;

interface HeavyProps6506 {
  config: DeepPartial6506<NestedConfig6506>;
  path?: ConfigPaths6506;
}

const HeavyComponent6506 = memo(function HeavyComponent6506({ config }: HeavyProps6506) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6506) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6506 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6506: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6506.displayName = 'HeavyComponent6506';
export default HeavyComponent6506;
