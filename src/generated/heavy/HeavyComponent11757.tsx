'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11757<T> = T extends (infer U)[]
  ? DeepReadonlyArray11757<U>
  : T extends object
  ? DeepReadonlyObject11757<T>
  : T;

interface DeepReadonlyArray11757<T> extends ReadonlyArray<DeepReadonly11757<T>> {}

type DeepReadonlyObject11757<T> = {
  readonly [P in keyof T]: DeepReadonly11757<T[P]>;
};

type UnionToIntersection11757<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11757<T> = UnionToIntersection11757<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11757<T extends unknown[], V> = [...T, V];

type TuplifyUnion11757<T, L = LastOf11757<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11757<TuplifyUnion11757<Exclude<T, L>>, L>;

type DeepPartial11757<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11757<T[P]> }
  : T;

type Paths11757<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11757<K, Paths11757<T[K], Prev11757[D]>> : never }[keyof T]
  : never;

type Prev11757 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11757<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11757 {
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

type ConfigPaths11757 = Paths11757<NestedConfig11757>;

interface HeavyProps11757 {
  config: DeepPartial11757<NestedConfig11757>;
  path?: ConfigPaths11757;
}

const HeavyComponent11757 = memo(function HeavyComponent11757({ config }: HeavyProps11757) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11757) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11757 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11757: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11757.displayName = 'HeavyComponent11757';
export default HeavyComponent11757;
