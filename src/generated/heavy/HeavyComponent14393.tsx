'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14393<T> = T extends (infer U)[]
  ? DeepReadonlyArray14393<U>
  : T extends object
  ? DeepReadonlyObject14393<T>
  : T;

interface DeepReadonlyArray14393<T> extends ReadonlyArray<DeepReadonly14393<T>> {}

type DeepReadonlyObject14393<T> = {
  readonly [P in keyof T]: DeepReadonly14393<T[P]>;
};

type UnionToIntersection14393<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14393<T> = UnionToIntersection14393<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14393<T extends unknown[], V> = [...T, V];

type TuplifyUnion14393<T, L = LastOf14393<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14393<TuplifyUnion14393<Exclude<T, L>>, L>;

type DeepPartial14393<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14393<T[P]> }
  : T;

type Paths14393<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14393<K, Paths14393<T[K], Prev14393[D]>> : never }[keyof T]
  : never;

type Prev14393 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14393<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14393 {
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

type ConfigPaths14393 = Paths14393<NestedConfig14393>;

interface HeavyProps14393 {
  config: DeepPartial14393<NestedConfig14393>;
  path?: ConfigPaths14393;
}

const HeavyComponent14393 = memo(function HeavyComponent14393({ config }: HeavyProps14393) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14393) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14393 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14393: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14393.displayName = 'HeavyComponent14393';
export default HeavyComponent14393;
