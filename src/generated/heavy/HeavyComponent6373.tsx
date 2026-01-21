'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6373<T> = T extends (infer U)[]
  ? DeepReadonlyArray6373<U>
  : T extends object
  ? DeepReadonlyObject6373<T>
  : T;

interface DeepReadonlyArray6373<T> extends ReadonlyArray<DeepReadonly6373<T>> {}

type DeepReadonlyObject6373<T> = {
  readonly [P in keyof T]: DeepReadonly6373<T[P]>;
};

type UnionToIntersection6373<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6373<T> = UnionToIntersection6373<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6373<T extends unknown[], V> = [...T, V];

type TuplifyUnion6373<T, L = LastOf6373<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6373<TuplifyUnion6373<Exclude<T, L>>, L>;

type DeepPartial6373<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6373<T[P]> }
  : T;

type Paths6373<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6373<K, Paths6373<T[K], Prev6373[D]>> : never }[keyof T]
  : never;

type Prev6373 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6373<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6373 {
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

type ConfigPaths6373 = Paths6373<NestedConfig6373>;

interface HeavyProps6373 {
  config: DeepPartial6373<NestedConfig6373>;
  path?: ConfigPaths6373;
}

const HeavyComponent6373 = memo(function HeavyComponent6373({ config }: HeavyProps6373) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6373) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6373 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6373: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6373.displayName = 'HeavyComponent6373';
export default HeavyComponent6373;
