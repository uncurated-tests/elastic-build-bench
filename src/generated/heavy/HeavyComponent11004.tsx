'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11004<T> = T extends (infer U)[]
  ? DeepReadonlyArray11004<U>
  : T extends object
  ? DeepReadonlyObject11004<T>
  : T;

interface DeepReadonlyArray11004<T> extends ReadonlyArray<DeepReadonly11004<T>> {}

type DeepReadonlyObject11004<T> = {
  readonly [P in keyof T]: DeepReadonly11004<T[P]>;
};

type UnionToIntersection11004<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11004<T> = UnionToIntersection11004<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11004<T extends unknown[], V> = [...T, V];

type TuplifyUnion11004<T, L = LastOf11004<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11004<TuplifyUnion11004<Exclude<T, L>>, L>;

type DeepPartial11004<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11004<T[P]> }
  : T;

type Paths11004<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11004<K, Paths11004<T[K], Prev11004[D]>> : never }[keyof T]
  : never;

type Prev11004 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11004<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11004 {
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

type ConfigPaths11004 = Paths11004<NestedConfig11004>;

interface HeavyProps11004 {
  config: DeepPartial11004<NestedConfig11004>;
  path?: ConfigPaths11004;
}

const HeavyComponent11004 = memo(function HeavyComponent11004({ config }: HeavyProps11004) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11004) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11004 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11004: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11004.displayName = 'HeavyComponent11004';
export default HeavyComponent11004;
