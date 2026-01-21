'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11550<T> = T extends (infer U)[]
  ? DeepReadonlyArray11550<U>
  : T extends object
  ? DeepReadonlyObject11550<T>
  : T;

interface DeepReadonlyArray11550<T> extends ReadonlyArray<DeepReadonly11550<T>> {}

type DeepReadonlyObject11550<T> = {
  readonly [P in keyof T]: DeepReadonly11550<T[P]>;
};

type UnionToIntersection11550<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11550<T> = UnionToIntersection11550<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11550<T extends unknown[], V> = [...T, V];

type TuplifyUnion11550<T, L = LastOf11550<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11550<TuplifyUnion11550<Exclude<T, L>>, L>;

type DeepPartial11550<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11550<T[P]> }
  : T;

type Paths11550<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11550<K, Paths11550<T[K], Prev11550[D]>> : never }[keyof T]
  : never;

type Prev11550 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11550<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11550 {
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

type ConfigPaths11550 = Paths11550<NestedConfig11550>;

interface HeavyProps11550 {
  config: DeepPartial11550<NestedConfig11550>;
  path?: ConfigPaths11550;
}

const HeavyComponent11550 = memo(function HeavyComponent11550({ config }: HeavyProps11550) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11550) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11550 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11550: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11550.displayName = 'HeavyComponent11550';
export default HeavyComponent11550;
