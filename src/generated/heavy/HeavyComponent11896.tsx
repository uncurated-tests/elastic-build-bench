'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11896<T> = T extends (infer U)[]
  ? DeepReadonlyArray11896<U>
  : T extends object
  ? DeepReadonlyObject11896<T>
  : T;

interface DeepReadonlyArray11896<T> extends ReadonlyArray<DeepReadonly11896<T>> {}

type DeepReadonlyObject11896<T> = {
  readonly [P in keyof T]: DeepReadonly11896<T[P]>;
};

type UnionToIntersection11896<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11896<T> = UnionToIntersection11896<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11896<T extends unknown[], V> = [...T, V];

type TuplifyUnion11896<T, L = LastOf11896<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11896<TuplifyUnion11896<Exclude<T, L>>, L>;

type DeepPartial11896<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11896<T[P]> }
  : T;

type Paths11896<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11896<K, Paths11896<T[K], Prev11896[D]>> : never }[keyof T]
  : never;

type Prev11896 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11896<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11896 {
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

type ConfigPaths11896 = Paths11896<NestedConfig11896>;

interface HeavyProps11896 {
  config: DeepPartial11896<NestedConfig11896>;
  path?: ConfigPaths11896;
}

const HeavyComponent11896 = memo(function HeavyComponent11896({ config }: HeavyProps11896) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11896) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11896 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11896: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11896.displayName = 'HeavyComponent11896';
export default HeavyComponent11896;
