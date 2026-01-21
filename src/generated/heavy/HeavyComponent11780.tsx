'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11780<T> = T extends (infer U)[]
  ? DeepReadonlyArray11780<U>
  : T extends object
  ? DeepReadonlyObject11780<T>
  : T;

interface DeepReadonlyArray11780<T> extends ReadonlyArray<DeepReadonly11780<T>> {}

type DeepReadonlyObject11780<T> = {
  readonly [P in keyof T]: DeepReadonly11780<T[P]>;
};

type UnionToIntersection11780<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11780<T> = UnionToIntersection11780<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11780<T extends unknown[], V> = [...T, V];

type TuplifyUnion11780<T, L = LastOf11780<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11780<TuplifyUnion11780<Exclude<T, L>>, L>;

type DeepPartial11780<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11780<T[P]> }
  : T;

type Paths11780<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11780<K, Paths11780<T[K], Prev11780[D]>> : never }[keyof T]
  : never;

type Prev11780 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11780<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11780 {
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

type ConfigPaths11780 = Paths11780<NestedConfig11780>;

interface HeavyProps11780 {
  config: DeepPartial11780<NestedConfig11780>;
  path?: ConfigPaths11780;
}

const HeavyComponent11780 = memo(function HeavyComponent11780({ config }: HeavyProps11780) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11780) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11780 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11780: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11780.displayName = 'HeavyComponent11780';
export default HeavyComponent11780;
