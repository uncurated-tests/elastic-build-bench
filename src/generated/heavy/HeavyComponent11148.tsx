'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11148<T> = T extends (infer U)[]
  ? DeepReadonlyArray11148<U>
  : T extends object
  ? DeepReadonlyObject11148<T>
  : T;

interface DeepReadonlyArray11148<T> extends ReadonlyArray<DeepReadonly11148<T>> {}

type DeepReadonlyObject11148<T> = {
  readonly [P in keyof T]: DeepReadonly11148<T[P]>;
};

type UnionToIntersection11148<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11148<T> = UnionToIntersection11148<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11148<T extends unknown[], V> = [...T, V];

type TuplifyUnion11148<T, L = LastOf11148<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11148<TuplifyUnion11148<Exclude<T, L>>, L>;

type DeepPartial11148<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11148<T[P]> }
  : T;

type Paths11148<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11148<K, Paths11148<T[K], Prev11148[D]>> : never }[keyof T]
  : never;

type Prev11148 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11148<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11148 {
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

type ConfigPaths11148 = Paths11148<NestedConfig11148>;

interface HeavyProps11148 {
  config: DeepPartial11148<NestedConfig11148>;
  path?: ConfigPaths11148;
}

const HeavyComponent11148 = memo(function HeavyComponent11148({ config }: HeavyProps11148) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11148) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11148 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11148: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11148.displayName = 'HeavyComponent11148';
export default HeavyComponent11148;
