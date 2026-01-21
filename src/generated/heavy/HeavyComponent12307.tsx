'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12307<T> = T extends (infer U)[]
  ? DeepReadonlyArray12307<U>
  : T extends object
  ? DeepReadonlyObject12307<T>
  : T;

interface DeepReadonlyArray12307<T> extends ReadonlyArray<DeepReadonly12307<T>> {}

type DeepReadonlyObject12307<T> = {
  readonly [P in keyof T]: DeepReadonly12307<T[P]>;
};

type UnionToIntersection12307<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12307<T> = UnionToIntersection12307<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12307<T extends unknown[], V> = [...T, V];

type TuplifyUnion12307<T, L = LastOf12307<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12307<TuplifyUnion12307<Exclude<T, L>>, L>;

type DeepPartial12307<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12307<T[P]> }
  : T;

type Paths12307<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12307<K, Paths12307<T[K], Prev12307[D]>> : never }[keyof T]
  : never;

type Prev12307 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12307<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12307 {
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

type ConfigPaths12307 = Paths12307<NestedConfig12307>;

interface HeavyProps12307 {
  config: DeepPartial12307<NestedConfig12307>;
  path?: ConfigPaths12307;
}

const HeavyComponent12307 = memo(function HeavyComponent12307({ config }: HeavyProps12307) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12307) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12307 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12307: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12307.displayName = 'HeavyComponent12307';
export default HeavyComponent12307;
