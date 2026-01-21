'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11656<T> = T extends (infer U)[]
  ? DeepReadonlyArray11656<U>
  : T extends object
  ? DeepReadonlyObject11656<T>
  : T;

interface DeepReadonlyArray11656<T> extends ReadonlyArray<DeepReadonly11656<T>> {}

type DeepReadonlyObject11656<T> = {
  readonly [P in keyof T]: DeepReadonly11656<T[P]>;
};

type UnionToIntersection11656<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11656<T> = UnionToIntersection11656<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11656<T extends unknown[], V> = [...T, V];

type TuplifyUnion11656<T, L = LastOf11656<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11656<TuplifyUnion11656<Exclude<T, L>>, L>;

type DeepPartial11656<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11656<T[P]> }
  : T;

type Paths11656<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11656<K, Paths11656<T[K], Prev11656[D]>> : never }[keyof T]
  : never;

type Prev11656 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11656<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11656 {
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

type ConfigPaths11656 = Paths11656<NestedConfig11656>;

interface HeavyProps11656 {
  config: DeepPartial11656<NestedConfig11656>;
  path?: ConfigPaths11656;
}

const HeavyComponent11656 = memo(function HeavyComponent11656({ config }: HeavyProps11656) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11656) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11656 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11656: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11656.displayName = 'HeavyComponent11656';
export default HeavyComponent11656;
