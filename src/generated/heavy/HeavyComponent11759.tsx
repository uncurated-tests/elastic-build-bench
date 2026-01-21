'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11759<T> = T extends (infer U)[]
  ? DeepReadonlyArray11759<U>
  : T extends object
  ? DeepReadonlyObject11759<T>
  : T;

interface DeepReadonlyArray11759<T> extends ReadonlyArray<DeepReadonly11759<T>> {}

type DeepReadonlyObject11759<T> = {
  readonly [P in keyof T]: DeepReadonly11759<T[P]>;
};

type UnionToIntersection11759<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11759<T> = UnionToIntersection11759<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11759<T extends unknown[], V> = [...T, V];

type TuplifyUnion11759<T, L = LastOf11759<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11759<TuplifyUnion11759<Exclude<T, L>>, L>;

type DeepPartial11759<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11759<T[P]> }
  : T;

type Paths11759<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11759<K, Paths11759<T[K], Prev11759[D]>> : never }[keyof T]
  : never;

type Prev11759 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11759<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11759 {
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

type ConfigPaths11759 = Paths11759<NestedConfig11759>;

interface HeavyProps11759 {
  config: DeepPartial11759<NestedConfig11759>;
  path?: ConfigPaths11759;
}

const HeavyComponent11759 = memo(function HeavyComponent11759({ config }: HeavyProps11759) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11759) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11759 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11759: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11759.displayName = 'HeavyComponent11759';
export default HeavyComponent11759;
