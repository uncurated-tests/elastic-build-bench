'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11189<T> = T extends (infer U)[]
  ? DeepReadonlyArray11189<U>
  : T extends object
  ? DeepReadonlyObject11189<T>
  : T;

interface DeepReadonlyArray11189<T> extends ReadonlyArray<DeepReadonly11189<T>> {}

type DeepReadonlyObject11189<T> = {
  readonly [P in keyof T]: DeepReadonly11189<T[P]>;
};

type UnionToIntersection11189<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11189<T> = UnionToIntersection11189<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11189<T extends unknown[], V> = [...T, V];

type TuplifyUnion11189<T, L = LastOf11189<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11189<TuplifyUnion11189<Exclude<T, L>>, L>;

type DeepPartial11189<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11189<T[P]> }
  : T;

type Paths11189<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11189<K, Paths11189<T[K], Prev11189[D]>> : never }[keyof T]
  : never;

type Prev11189 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11189<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11189 {
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

type ConfigPaths11189 = Paths11189<NestedConfig11189>;

interface HeavyProps11189 {
  config: DeepPartial11189<NestedConfig11189>;
  path?: ConfigPaths11189;
}

const HeavyComponent11189 = memo(function HeavyComponent11189({ config }: HeavyProps11189) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11189) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11189 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11189: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11189.displayName = 'HeavyComponent11189';
export default HeavyComponent11189;
