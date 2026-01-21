'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly520<T> = T extends (infer U)[]
  ? DeepReadonlyArray520<U>
  : T extends object
  ? DeepReadonlyObject520<T>
  : T;

interface DeepReadonlyArray520<T> extends ReadonlyArray<DeepReadonly520<T>> {}

type DeepReadonlyObject520<T> = {
  readonly [P in keyof T]: DeepReadonly520<T[P]>;
};

type UnionToIntersection520<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf520<T> = UnionToIntersection520<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push520<T extends unknown[], V> = [...T, V];

type TuplifyUnion520<T, L = LastOf520<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push520<TuplifyUnion520<Exclude<T, L>>, L>;

type DeepPartial520<T> = T extends object
  ? { [P in keyof T]?: DeepPartial520<T[P]> }
  : T;

type Paths520<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join520<K, Paths520<T[K], Prev520[D]>> : never }[keyof T]
  : never;

type Prev520 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join520<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig520 {
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

type ConfigPaths520 = Paths520<NestedConfig520>;

interface HeavyProps520 {
  config: DeepPartial520<NestedConfig520>;
  path?: ConfigPaths520;
}

const HeavyComponent520 = memo(function HeavyComponent520({ config }: HeavyProps520) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 520) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-520 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H520: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent520.displayName = 'HeavyComponent520';
export default HeavyComponent520;
