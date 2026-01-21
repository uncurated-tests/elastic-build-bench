'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11135<T> = T extends (infer U)[]
  ? DeepReadonlyArray11135<U>
  : T extends object
  ? DeepReadonlyObject11135<T>
  : T;

interface DeepReadonlyArray11135<T> extends ReadonlyArray<DeepReadonly11135<T>> {}

type DeepReadonlyObject11135<T> = {
  readonly [P in keyof T]: DeepReadonly11135<T[P]>;
};

type UnionToIntersection11135<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11135<T> = UnionToIntersection11135<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11135<T extends unknown[], V> = [...T, V];

type TuplifyUnion11135<T, L = LastOf11135<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11135<TuplifyUnion11135<Exclude<T, L>>, L>;

type DeepPartial11135<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11135<T[P]> }
  : T;

type Paths11135<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11135<K, Paths11135<T[K], Prev11135[D]>> : never }[keyof T]
  : never;

type Prev11135 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11135<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11135 {
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

type ConfigPaths11135 = Paths11135<NestedConfig11135>;

interface HeavyProps11135 {
  config: DeepPartial11135<NestedConfig11135>;
  path?: ConfigPaths11135;
}

const HeavyComponent11135 = memo(function HeavyComponent11135({ config }: HeavyProps11135) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11135) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11135 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11135: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11135.displayName = 'HeavyComponent11135';
export default HeavyComponent11135;
