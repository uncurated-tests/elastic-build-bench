'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly73<T> = T extends (infer U)[]
  ? DeepReadonlyArray73<U>
  : T extends object
  ? DeepReadonlyObject73<T>
  : T;

interface DeepReadonlyArray73<T> extends ReadonlyArray<DeepReadonly73<T>> {}

type DeepReadonlyObject73<T> = {
  readonly [P in keyof T]: DeepReadonly73<T[P]>;
};

type UnionToIntersection73<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf73<T> = UnionToIntersection73<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push73<T extends unknown[], V> = [...T, V];

type TuplifyUnion73<T, L = LastOf73<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push73<TuplifyUnion73<Exclude<T, L>>, L>;

type DeepPartial73<T> = T extends object
  ? { [P in keyof T]?: DeepPartial73<T[P]> }
  : T;

type Paths73<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join73<K, Paths73<T[K], Prev73[D]>> : never }[keyof T]
  : never;

type Prev73 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join73<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig73 {
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

type ConfigPaths73 = Paths73<NestedConfig73>;

interface HeavyProps73 {
  config: DeepPartial73<NestedConfig73>;
  path?: ConfigPaths73;
}

const HeavyComponent73 = memo(function HeavyComponent73({ config }: HeavyProps73) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 73) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-73 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H73: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent73.displayName = 'HeavyComponent73';
export default HeavyComponent73;
