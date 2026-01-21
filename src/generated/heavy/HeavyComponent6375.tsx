'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6375<T> = T extends (infer U)[]
  ? DeepReadonlyArray6375<U>
  : T extends object
  ? DeepReadonlyObject6375<T>
  : T;

interface DeepReadonlyArray6375<T> extends ReadonlyArray<DeepReadonly6375<T>> {}

type DeepReadonlyObject6375<T> = {
  readonly [P in keyof T]: DeepReadonly6375<T[P]>;
};

type UnionToIntersection6375<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6375<T> = UnionToIntersection6375<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6375<T extends unknown[], V> = [...T, V];

type TuplifyUnion6375<T, L = LastOf6375<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6375<TuplifyUnion6375<Exclude<T, L>>, L>;

type DeepPartial6375<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6375<T[P]> }
  : T;

type Paths6375<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6375<K, Paths6375<T[K], Prev6375[D]>> : never }[keyof T]
  : never;

type Prev6375 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6375<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6375 {
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

type ConfigPaths6375 = Paths6375<NestedConfig6375>;

interface HeavyProps6375 {
  config: DeepPartial6375<NestedConfig6375>;
  path?: ConfigPaths6375;
}

const HeavyComponent6375 = memo(function HeavyComponent6375({ config }: HeavyProps6375) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6375) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6375 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6375: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6375.displayName = 'HeavyComponent6375';
export default HeavyComponent6375;
