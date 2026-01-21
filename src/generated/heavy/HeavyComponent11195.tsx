'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11195<T> = T extends (infer U)[]
  ? DeepReadonlyArray11195<U>
  : T extends object
  ? DeepReadonlyObject11195<T>
  : T;

interface DeepReadonlyArray11195<T> extends ReadonlyArray<DeepReadonly11195<T>> {}

type DeepReadonlyObject11195<T> = {
  readonly [P in keyof T]: DeepReadonly11195<T[P]>;
};

type UnionToIntersection11195<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11195<T> = UnionToIntersection11195<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11195<T extends unknown[], V> = [...T, V];

type TuplifyUnion11195<T, L = LastOf11195<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11195<TuplifyUnion11195<Exclude<T, L>>, L>;

type DeepPartial11195<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11195<T[P]> }
  : T;

type Paths11195<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11195<K, Paths11195<T[K], Prev11195[D]>> : never }[keyof T]
  : never;

type Prev11195 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11195<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11195 {
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

type ConfigPaths11195 = Paths11195<NestedConfig11195>;

interface HeavyProps11195 {
  config: DeepPartial11195<NestedConfig11195>;
  path?: ConfigPaths11195;
}

const HeavyComponent11195 = memo(function HeavyComponent11195({ config }: HeavyProps11195) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11195) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11195 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11195: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11195.displayName = 'HeavyComponent11195';
export default HeavyComponent11195;
