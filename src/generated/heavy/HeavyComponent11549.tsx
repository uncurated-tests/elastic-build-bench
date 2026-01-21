'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11549<T> = T extends (infer U)[]
  ? DeepReadonlyArray11549<U>
  : T extends object
  ? DeepReadonlyObject11549<T>
  : T;

interface DeepReadonlyArray11549<T> extends ReadonlyArray<DeepReadonly11549<T>> {}

type DeepReadonlyObject11549<T> = {
  readonly [P in keyof T]: DeepReadonly11549<T[P]>;
};

type UnionToIntersection11549<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11549<T> = UnionToIntersection11549<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11549<T extends unknown[], V> = [...T, V];

type TuplifyUnion11549<T, L = LastOf11549<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11549<TuplifyUnion11549<Exclude<T, L>>, L>;

type DeepPartial11549<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11549<T[P]> }
  : T;

type Paths11549<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11549<K, Paths11549<T[K], Prev11549[D]>> : never }[keyof T]
  : never;

type Prev11549 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11549<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11549 {
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

type ConfigPaths11549 = Paths11549<NestedConfig11549>;

interface HeavyProps11549 {
  config: DeepPartial11549<NestedConfig11549>;
  path?: ConfigPaths11549;
}

const HeavyComponent11549 = memo(function HeavyComponent11549({ config }: HeavyProps11549) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11549) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11549 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11549: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11549.displayName = 'HeavyComponent11549';
export default HeavyComponent11549;
