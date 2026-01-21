'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11747<T> = T extends (infer U)[]
  ? DeepReadonlyArray11747<U>
  : T extends object
  ? DeepReadonlyObject11747<T>
  : T;

interface DeepReadonlyArray11747<T> extends ReadonlyArray<DeepReadonly11747<T>> {}

type DeepReadonlyObject11747<T> = {
  readonly [P in keyof T]: DeepReadonly11747<T[P]>;
};

type UnionToIntersection11747<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11747<T> = UnionToIntersection11747<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11747<T extends unknown[], V> = [...T, V];

type TuplifyUnion11747<T, L = LastOf11747<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11747<TuplifyUnion11747<Exclude<T, L>>, L>;

type DeepPartial11747<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11747<T[P]> }
  : T;

type Paths11747<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11747<K, Paths11747<T[K], Prev11747[D]>> : never }[keyof T]
  : never;

type Prev11747 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11747<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11747 {
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

type ConfigPaths11747 = Paths11747<NestedConfig11747>;

interface HeavyProps11747 {
  config: DeepPartial11747<NestedConfig11747>;
  path?: ConfigPaths11747;
}

const HeavyComponent11747 = memo(function HeavyComponent11747({ config }: HeavyProps11747) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11747) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11747 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11747: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11747.displayName = 'HeavyComponent11747';
export default HeavyComponent11747;
