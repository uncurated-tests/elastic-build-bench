'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11734<T> = T extends (infer U)[]
  ? DeepReadonlyArray11734<U>
  : T extends object
  ? DeepReadonlyObject11734<T>
  : T;

interface DeepReadonlyArray11734<T> extends ReadonlyArray<DeepReadonly11734<T>> {}

type DeepReadonlyObject11734<T> = {
  readonly [P in keyof T]: DeepReadonly11734<T[P]>;
};

type UnionToIntersection11734<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11734<T> = UnionToIntersection11734<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11734<T extends unknown[], V> = [...T, V];

type TuplifyUnion11734<T, L = LastOf11734<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11734<TuplifyUnion11734<Exclude<T, L>>, L>;

type DeepPartial11734<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11734<T[P]> }
  : T;

type Paths11734<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11734<K, Paths11734<T[K], Prev11734[D]>> : never }[keyof T]
  : never;

type Prev11734 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11734<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11734 {
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

type ConfigPaths11734 = Paths11734<NestedConfig11734>;

interface HeavyProps11734 {
  config: DeepPartial11734<NestedConfig11734>;
  path?: ConfigPaths11734;
}

const HeavyComponent11734 = memo(function HeavyComponent11734({ config }: HeavyProps11734) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11734) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11734 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11734: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11734.displayName = 'HeavyComponent11734';
export default HeavyComponent11734;
