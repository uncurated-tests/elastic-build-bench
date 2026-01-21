'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6250<T> = T extends (infer U)[]
  ? DeepReadonlyArray6250<U>
  : T extends object
  ? DeepReadonlyObject6250<T>
  : T;

interface DeepReadonlyArray6250<T> extends ReadonlyArray<DeepReadonly6250<T>> {}

type DeepReadonlyObject6250<T> = {
  readonly [P in keyof T]: DeepReadonly6250<T[P]>;
};

type UnionToIntersection6250<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6250<T> = UnionToIntersection6250<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6250<T extends unknown[], V> = [...T, V];

type TuplifyUnion6250<T, L = LastOf6250<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6250<TuplifyUnion6250<Exclude<T, L>>, L>;

type DeepPartial6250<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6250<T[P]> }
  : T;

type Paths6250<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6250<K, Paths6250<T[K], Prev6250[D]>> : never }[keyof T]
  : never;

type Prev6250 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6250<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6250 {
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

type ConfigPaths6250 = Paths6250<NestedConfig6250>;

interface HeavyProps6250 {
  config: DeepPartial6250<NestedConfig6250>;
  path?: ConfigPaths6250;
}

const HeavyComponent6250 = memo(function HeavyComponent6250({ config }: HeavyProps6250) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6250) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6250 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6250: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6250.displayName = 'HeavyComponent6250';
export default HeavyComponent6250;
