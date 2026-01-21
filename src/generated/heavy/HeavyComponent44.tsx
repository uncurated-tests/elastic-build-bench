'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly44<T> = T extends (infer U)[]
  ? DeepReadonlyArray44<U>
  : T extends object
  ? DeepReadonlyObject44<T>
  : T;

interface DeepReadonlyArray44<T> extends ReadonlyArray<DeepReadonly44<T>> {}

type DeepReadonlyObject44<T> = {
  readonly [P in keyof T]: DeepReadonly44<T[P]>;
};

type UnionToIntersection44<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf44<T> = UnionToIntersection44<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push44<T extends unknown[], V> = [...T, V];

type TuplifyUnion44<T, L = LastOf44<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push44<TuplifyUnion44<Exclude<T, L>>, L>;

type DeepPartial44<T> = T extends object
  ? { [P in keyof T]?: DeepPartial44<T[P]> }
  : T;

type Paths44<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join44<K, Paths44<T[K], Prev44[D]>> : never }[keyof T]
  : never;

type Prev44 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join44<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig44 {
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

type ConfigPaths44 = Paths44<NestedConfig44>;

interface HeavyProps44 {
  config: DeepPartial44<NestedConfig44>;
  path?: ConfigPaths44;
}

const HeavyComponent44 = memo(function HeavyComponent44({ config }: HeavyProps44) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 44) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-44 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H44: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent44.displayName = 'HeavyComponent44';
export default HeavyComponent44;
