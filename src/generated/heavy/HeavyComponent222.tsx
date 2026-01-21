'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly222<T> = T extends (infer U)[]
  ? DeepReadonlyArray222<U>
  : T extends object
  ? DeepReadonlyObject222<T>
  : T;

interface DeepReadonlyArray222<T> extends ReadonlyArray<DeepReadonly222<T>> {}

type DeepReadonlyObject222<T> = {
  readonly [P in keyof T]: DeepReadonly222<T[P]>;
};

type UnionToIntersection222<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf222<T> = UnionToIntersection222<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push222<T extends unknown[], V> = [...T, V];

type TuplifyUnion222<T, L = LastOf222<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push222<TuplifyUnion222<Exclude<T, L>>, L>;

type DeepPartial222<T> = T extends object
  ? { [P in keyof T]?: DeepPartial222<T[P]> }
  : T;

type Paths222<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join222<K, Paths222<T[K], Prev222[D]>> : never }[keyof T]
  : never;

type Prev222 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join222<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig222 {
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

type ConfigPaths222 = Paths222<NestedConfig222>;

interface HeavyProps222 {
  config: DeepPartial222<NestedConfig222>;
  path?: ConfigPaths222;
}

const HeavyComponent222 = memo(function HeavyComponent222({ config }: HeavyProps222) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 222) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-222 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H222: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent222.displayName = 'HeavyComponent222';
export default HeavyComponent222;
