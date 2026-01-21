'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6773<T> = T extends (infer U)[]
  ? DeepReadonlyArray6773<U>
  : T extends object
  ? DeepReadonlyObject6773<T>
  : T;

interface DeepReadonlyArray6773<T> extends ReadonlyArray<DeepReadonly6773<T>> {}

type DeepReadonlyObject6773<T> = {
  readonly [P in keyof T]: DeepReadonly6773<T[P]>;
};

type UnionToIntersection6773<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6773<T> = UnionToIntersection6773<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6773<T extends unknown[], V> = [...T, V];

type TuplifyUnion6773<T, L = LastOf6773<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6773<TuplifyUnion6773<Exclude<T, L>>, L>;

type DeepPartial6773<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6773<T[P]> }
  : T;

type Paths6773<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6773<K, Paths6773<T[K], Prev6773[D]>> : never }[keyof T]
  : never;

type Prev6773 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6773<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6773 {
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

type ConfigPaths6773 = Paths6773<NestedConfig6773>;

interface HeavyProps6773 {
  config: DeepPartial6773<NestedConfig6773>;
  path?: ConfigPaths6773;
}

const HeavyComponent6773 = memo(function HeavyComponent6773({ config }: HeavyProps6773) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6773) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6773 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6773: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6773.displayName = 'HeavyComponent6773';
export default HeavyComponent6773;
