'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11707<T> = T extends (infer U)[]
  ? DeepReadonlyArray11707<U>
  : T extends object
  ? DeepReadonlyObject11707<T>
  : T;

interface DeepReadonlyArray11707<T> extends ReadonlyArray<DeepReadonly11707<T>> {}

type DeepReadonlyObject11707<T> = {
  readonly [P in keyof T]: DeepReadonly11707<T[P]>;
};

type UnionToIntersection11707<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11707<T> = UnionToIntersection11707<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11707<T extends unknown[], V> = [...T, V];

type TuplifyUnion11707<T, L = LastOf11707<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11707<TuplifyUnion11707<Exclude<T, L>>, L>;

type DeepPartial11707<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11707<T[P]> }
  : T;

type Paths11707<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11707<K, Paths11707<T[K], Prev11707[D]>> : never }[keyof T]
  : never;

type Prev11707 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11707<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11707 {
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

type ConfigPaths11707 = Paths11707<NestedConfig11707>;

interface HeavyProps11707 {
  config: DeepPartial11707<NestedConfig11707>;
  path?: ConfigPaths11707;
}

const HeavyComponent11707 = memo(function HeavyComponent11707({ config }: HeavyProps11707) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11707) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11707 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11707: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11707.displayName = 'HeavyComponent11707';
export default HeavyComponent11707;
