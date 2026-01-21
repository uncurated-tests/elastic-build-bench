'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14331<T> = T extends (infer U)[]
  ? DeepReadonlyArray14331<U>
  : T extends object
  ? DeepReadonlyObject14331<T>
  : T;

interface DeepReadonlyArray14331<T> extends ReadonlyArray<DeepReadonly14331<T>> {}

type DeepReadonlyObject14331<T> = {
  readonly [P in keyof T]: DeepReadonly14331<T[P]>;
};

type UnionToIntersection14331<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14331<T> = UnionToIntersection14331<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14331<T extends unknown[], V> = [...T, V];

type TuplifyUnion14331<T, L = LastOf14331<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14331<TuplifyUnion14331<Exclude<T, L>>, L>;

type DeepPartial14331<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14331<T[P]> }
  : T;

type Paths14331<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14331<K, Paths14331<T[K], Prev14331[D]>> : never }[keyof T]
  : never;

type Prev14331 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14331<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14331 {
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

type ConfigPaths14331 = Paths14331<NestedConfig14331>;

interface HeavyProps14331 {
  config: DeepPartial14331<NestedConfig14331>;
  path?: ConfigPaths14331;
}

const HeavyComponent14331 = memo(function HeavyComponent14331({ config }: HeavyProps14331) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14331) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14331 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14331: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14331.displayName = 'HeavyComponent14331';
export default HeavyComponent14331;
