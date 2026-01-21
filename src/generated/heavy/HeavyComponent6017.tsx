'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6017<T> = T extends (infer U)[]
  ? DeepReadonlyArray6017<U>
  : T extends object
  ? DeepReadonlyObject6017<T>
  : T;

interface DeepReadonlyArray6017<T> extends ReadonlyArray<DeepReadonly6017<T>> {}

type DeepReadonlyObject6017<T> = {
  readonly [P in keyof T]: DeepReadonly6017<T[P]>;
};

type UnionToIntersection6017<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6017<T> = UnionToIntersection6017<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6017<T extends unknown[], V> = [...T, V];

type TuplifyUnion6017<T, L = LastOf6017<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6017<TuplifyUnion6017<Exclude<T, L>>, L>;

type DeepPartial6017<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6017<T[P]> }
  : T;

type Paths6017<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6017<K, Paths6017<T[K], Prev6017[D]>> : never }[keyof T]
  : never;

type Prev6017 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6017<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6017 {
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

type ConfigPaths6017 = Paths6017<NestedConfig6017>;

interface HeavyProps6017 {
  config: DeepPartial6017<NestedConfig6017>;
  path?: ConfigPaths6017;
}

const HeavyComponent6017 = memo(function HeavyComponent6017({ config }: HeavyProps6017) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6017) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6017 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6017: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6017.displayName = 'HeavyComponent6017';
export default HeavyComponent6017;
