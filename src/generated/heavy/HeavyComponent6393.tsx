'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6393<T> = T extends (infer U)[]
  ? DeepReadonlyArray6393<U>
  : T extends object
  ? DeepReadonlyObject6393<T>
  : T;

interface DeepReadonlyArray6393<T> extends ReadonlyArray<DeepReadonly6393<T>> {}

type DeepReadonlyObject6393<T> = {
  readonly [P in keyof T]: DeepReadonly6393<T[P]>;
};

type UnionToIntersection6393<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6393<T> = UnionToIntersection6393<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6393<T extends unknown[], V> = [...T, V];

type TuplifyUnion6393<T, L = LastOf6393<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6393<TuplifyUnion6393<Exclude<T, L>>, L>;

type DeepPartial6393<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6393<T[P]> }
  : T;

type Paths6393<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6393<K, Paths6393<T[K], Prev6393[D]>> : never }[keyof T]
  : never;

type Prev6393 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6393<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6393 {
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

type ConfigPaths6393 = Paths6393<NestedConfig6393>;

interface HeavyProps6393 {
  config: DeepPartial6393<NestedConfig6393>;
  path?: ConfigPaths6393;
}

const HeavyComponent6393 = memo(function HeavyComponent6393({ config }: HeavyProps6393) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6393) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6393 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6393: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6393.displayName = 'HeavyComponent6393';
export default HeavyComponent6393;
