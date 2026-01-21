'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6259<T> = T extends (infer U)[]
  ? DeepReadonlyArray6259<U>
  : T extends object
  ? DeepReadonlyObject6259<T>
  : T;

interface DeepReadonlyArray6259<T> extends ReadonlyArray<DeepReadonly6259<T>> {}

type DeepReadonlyObject6259<T> = {
  readonly [P in keyof T]: DeepReadonly6259<T[P]>;
};

type UnionToIntersection6259<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6259<T> = UnionToIntersection6259<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6259<T extends unknown[], V> = [...T, V];

type TuplifyUnion6259<T, L = LastOf6259<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6259<TuplifyUnion6259<Exclude<T, L>>, L>;

type DeepPartial6259<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6259<T[P]> }
  : T;

type Paths6259<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6259<K, Paths6259<T[K], Prev6259[D]>> : never }[keyof T]
  : never;

type Prev6259 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6259<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6259 {
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

type ConfigPaths6259 = Paths6259<NestedConfig6259>;

interface HeavyProps6259 {
  config: DeepPartial6259<NestedConfig6259>;
  path?: ConfigPaths6259;
}

const HeavyComponent6259 = memo(function HeavyComponent6259({ config }: HeavyProps6259) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6259) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6259 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6259: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6259.displayName = 'HeavyComponent6259';
export default HeavyComponent6259;
