'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11703<T> = T extends (infer U)[]
  ? DeepReadonlyArray11703<U>
  : T extends object
  ? DeepReadonlyObject11703<T>
  : T;

interface DeepReadonlyArray11703<T> extends ReadonlyArray<DeepReadonly11703<T>> {}

type DeepReadonlyObject11703<T> = {
  readonly [P in keyof T]: DeepReadonly11703<T[P]>;
};

type UnionToIntersection11703<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11703<T> = UnionToIntersection11703<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11703<T extends unknown[], V> = [...T, V];

type TuplifyUnion11703<T, L = LastOf11703<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11703<TuplifyUnion11703<Exclude<T, L>>, L>;

type DeepPartial11703<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11703<T[P]> }
  : T;

type Paths11703<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11703<K, Paths11703<T[K], Prev11703[D]>> : never }[keyof T]
  : never;

type Prev11703 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11703<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11703 {
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

type ConfigPaths11703 = Paths11703<NestedConfig11703>;

interface HeavyProps11703 {
  config: DeepPartial11703<NestedConfig11703>;
  path?: ConfigPaths11703;
}

const HeavyComponent11703 = memo(function HeavyComponent11703({ config }: HeavyProps11703) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11703) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11703 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11703: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11703.displayName = 'HeavyComponent11703';
export default HeavyComponent11703;
