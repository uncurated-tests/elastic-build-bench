'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14071<T> = T extends (infer U)[]
  ? DeepReadonlyArray14071<U>
  : T extends object
  ? DeepReadonlyObject14071<T>
  : T;

interface DeepReadonlyArray14071<T> extends ReadonlyArray<DeepReadonly14071<T>> {}

type DeepReadonlyObject14071<T> = {
  readonly [P in keyof T]: DeepReadonly14071<T[P]>;
};

type UnionToIntersection14071<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14071<T> = UnionToIntersection14071<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14071<T extends unknown[], V> = [...T, V];

type TuplifyUnion14071<T, L = LastOf14071<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14071<TuplifyUnion14071<Exclude<T, L>>, L>;

type DeepPartial14071<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14071<T[P]> }
  : T;

type Paths14071<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14071<K, Paths14071<T[K], Prev14071[D]>> : never }[keyof T]
  : never;

type Prev14071 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14071<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14071 {
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

type ConfigPaths14071 = Paths14071<NestedConfig14071>;

interface HeavyProps14071 {
  config: DeepPartial14071<NestedConfig14071>;
  path?: ConfigPaths14071;
}

const HeavyComponent14071 = memo(function HeavyComponent14071({ config }: HeavyProps14071) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14071) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14071 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14071: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14071.displayName = 'HeavyComponent14071';
export default HeavyComponent14071;
