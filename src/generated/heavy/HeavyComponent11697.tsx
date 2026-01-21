'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11697<T> = T extends (infer U)[]
  ? DeepReadonlyArray11697<U>
  : T extends object
  ? DeepReadonlyObject11697<T>
  : T;

interface DeepReadonlyArray11697<T> extends ReadonlyArray<DeepReadonly11697<T>> {}

type DeepReadonlyObject11697<T> = {
  readonly [P in keyof T]: DeepReadonly11697<T[P]>;
};

type UnionToIntersection11697<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11697<T> = UnionToIntersection11697<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11697<T extends unknown[], V> = [...T, V];

type TuplifyUnion11697<T, L = LastOf11697<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11697<TuplifyUnion11697<Exclude<T, L>>, L>;

type DeepPartial11697<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11697<T[P]> }
  : T;

type Paths11697<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11697<K, Paths11697<T[K], Prev11697[D]>> : never }[keyof T]
  : never;

type Prev11697 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11697<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11697 {
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

type ConfigPaths11697 = Paths11697<NestedConfig11697>;

interface HeavyProps11697 {
  config: DeepPartial11697<NestedConfig11697>;
  path?: ConfigPaths11697;
}

const HeavyComponent11697 = memo(function HeavyComponent11697({ config }: HeavyProps11697) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11697) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11697 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11697: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11697.displayName = 'HeavyComponent11697';
export default HeavyComponent11697;
