'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly587<T> = T extends (infer U)[]
  ? DeepReadonlyArray587<U>
  : T extends object
  ? DeepReadonlyObject587<T>
  : T;

interface DeepReadonlyArray587<T> extends ReadonlyArray<DeepReadonly587<T>> {}

type DeepReadonlyObject587<T> = {
  readonly [P in keyof T]: DeepReadonly587<T[P]>;
};

type UnionToIntersection587<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf587<T> = UnionToIntersection587<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push587<T extends unknown[], V> = [...T, V];

type TuplifyUnion587<T, L = LastOf587<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push587<TuplifyUnion587<Exclude<T, L>>, L>;

type DeepPartial587<T> = T extends object
  ? { [P in keyof T]?: DeepPartial587<T[P]> }
  : T;

type Paths587<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join587<K, Paths587<T[K], Prev587[D]>> : never }[keyof T]
  : never;

type Prev587 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join587<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig587 {
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

type ConfigPaths587 = Paths587<NestedConfig587>;

interface HeavyProps587 {
  config: DeepPartial587<NestedConfig587>;
  path?: ConfigPaths587;
}

const HeavyComponent587 = memo(function HeavyComponent587({ config }: HeavyProps587) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 587) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-587 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H587: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent587.displayName = 'HeavyComponent587';
export default HeavyComponent587;
