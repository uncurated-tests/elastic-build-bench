'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14557<T> = T extends (infer U)[]
  ? DeepReadonlyArray14557<U>
  : T extends object
  ? DeepReadonlyObject14557<T>
  : T;

interface DeepReadonlyArray14557<T> extends ReadonlyArray<DeepReadonly14557<T>> {}

type DeepReadonlyObject14557<T> = {
  readonly [P in keyof T]: DeepReadonly14557<T[P]>;
};

type UnionToIntersection14557<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14557<T> = UnionToIntersection14557<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14557<T extends unknown[], V> = [...T, V];

type TuplifyUnion14557<T, L = LastOf14557<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14557<TuplifyUnion14557<Exclude<T, L>>, L>;

type DeepPartial14557<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14557<T[P]> }
  : T;

type Paths14557<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14557<K, Paths14557<T[K], Prev14557[D]>> : never }[keyof T]
  : never;

type Prev14557 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14557<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14557 {
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

type ConfigPaths14557 = Paths14557<NestedConfig14557>;

interface HeavyProps14557 {
  config: DeepPartial14557<NestedConfig14557>;
  path?: ConfigPaths14557;
}

const HeavyComponent14557 = memo(function HeavyComponent14557({ config }: HeavyProps14557) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14557) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14557 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14557: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14557.displayName = 'HeavyComponent14557';
export default HeavyComponent14557;
