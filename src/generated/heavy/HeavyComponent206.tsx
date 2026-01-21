'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly206<T> = T extends (infer U)[]
  ? DeepReadonlyArray206<U>
  : T extends object
  ? DeepReadonlyObject206<T>
  : T;

interface DeepReadonlyArray206<T> extends ReadonlyArray<DeepReadonly206<T>> {}

type DeepReadonlyObject206<T> = {
  readonly [P in keyof T]: DeepReadonly206<T[P]>;
};

type UnionToIntersection206<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf206<T> = UnionToIntersection206<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push206<T extends unknown[], V> = [...T, V];

type TuplifyUnion206<T, L = LastOf206<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push206<TuplifyUnion206<Exclude<T, L>>, L>;

type DeepPartial206<T> = T extends object
  ? { [P in keyof T]?: DeepPartial206<T[P]> }
  : T;

type Paths206<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join206<K, Paths206<T[K], Prev206[D]>> : never }[keyof T]
  : never;

type Prev206 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join206<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig206 {
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

type ConfigPaths206 = Paths206<NestedConfig206>;

interface HeavyProps206 {
  config: DeepPartial206<NestedConfig206>;
  path?: ConfigPaths206;
}

const HeavyComponent206 = memo(function HeavyComponent206({ config }: HeavyProps206) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 206) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-206 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H206: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent206.displayName = 'HeavyComponent206';
export default HeavyComponent206;
