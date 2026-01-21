'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6016<T> = T extends (infer U)[]
  ? DeepReadonlyArray6016<U>
  : T extends object
  ? DeepReadonlyObject6016<T>
  : T;

interface DeepReadonlyArray6016<T> extends ReadonlyArray<DeepReadonly6016<T>> {}

type DeepReadonlyObject6016<T> = {
  readonly [P in keyof T]: DeepReadonly6016<T[P]>;
};

type UnionToIntersection6016<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6016<T> = UnionToIntersection6016<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6016<T extends unknown[], V> = [...T, V];

type TuplifyUnion6016<T, L = LastOf6016<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6016<TuplifyUnion6016<Exclude<T, L>>, L>;

type DeepPartial6016<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6016<T[P]> }
  : T;

type Paths6016<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6016<K, Paths6016<T[K], Prev6016[D]>> : never }[keyof T]
  : never;

type Prev6016 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6016<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6016 {
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

type ConfigPaths6016 = Paths6016<NestedConfig6016>;

interface HeavyProps6016 {
  config: DeepPartial6016<NestedConfig6016>;
  path?: ConfigPaths6016;
}

const HeavyComponent6016 = memo(function HeavyComponent6016({ config }: HeavyProps6016) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6016) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6016 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6016: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6016.displayName = 'HeavyComponent6016';
export default HeavyComponent6016;
