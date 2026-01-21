'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11749<T> = T extends (infer U)[]
  ? DeepReadonlyArray11749<U>
  : T extends object
  ? DeepReadonlyObject11749<T>
  : T;

interface DeepReadonlyArray11749<T> extends ReadonlyArray<DeepReadonly11749<T>> {}

type DeepReadonlyObject11749<T> = {
  readonly [P in keyof T]: DeepReadonly11749<T[P]>;
};

type UnionToIntersection11749<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11749<T> = UnionToIntersection11749<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11749<T extends unknown[], V> = [...T, V];

type TuplifyUnion11749<T, L = LastOf11749<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11749<TuplifyUnion11749<Exclude<T, L>>, L>;

type DeepPartial11749<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11749<T[P]> }
  : T;

type Paths11749<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11749<K, Paths11749<T[K], Prev11749[D]>> : never }[keyof T]
  : never;

type Prev11749 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11749<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11749 {
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

type ConfigPaths11749 = Paths11749<NestedConfig11749>;

interface HeavyProps11749 {
  config: DeepPartial11749<NestedConfig11749>;
  path?: ConfigPaths11749;
}

const HeavyComponent11749 = memo(function HeavyComponent11749({ config }: HeavyProps11749) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11749) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11749 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11749: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11749.displayName = 'HeavyComponent11749';
export default HeavyComponent11749;
