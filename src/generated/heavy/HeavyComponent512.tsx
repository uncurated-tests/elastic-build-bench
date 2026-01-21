'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly512<T> = T extends (infer U)[]
  ? DeepReadonlyArray512<U>
  : T extends object
  ? DeepReadonlyObject512<T>
  : T;

interface DeepReadonlyArray512<T> extends ReadonlyArray<DeepReadonly512<T>> {}

type DeepReadonlyObject512<T> = {
  readonly [P in keyof T]: DeepReadonly512<T[P]>;
};

type UnionToIntersection512<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf512<T> = UnionToIntersection512<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push512<T extends unknown[], V> = [...T, V];

type TuplifyUnion512<T, L = LastOf512<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push512<TuplifyUnion512<Exclude<T, L>>, L>;

type DeepPartial512<T> = T extends object
  ? { [P in keyof T]?: DeepPartial512<T[P]> }
  : T;

type Paths512<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join512<K, Paths512<T[K], Prev512[D]>> : never }[keyof T]
  : never;

type Prev512 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join512<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig512 {
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

type ConfigPaths512 = Paths512<NestedConfig512>;

interface HeavyProps512 {
  config: DeepPartial512<NestedConfig512>;
  path?: ConfigPaths512;
}

const HeavyComponent512 = memo(function HeavyComponent512({ config }: HeavyProps512) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 512) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-512 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H512: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent512.displayName = 'HeavyComponent512';
export default HeavyComponent512;
