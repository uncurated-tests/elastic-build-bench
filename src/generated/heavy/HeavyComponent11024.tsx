'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11024<T> = T extends (infer U)[]
  ? DeepReadonlyArray11024<U>
  : T extends object
  ? DeepReadonlyObject11024<T>
  : T;

interface DeepReadonlyArray11024<T> extends ReadonlyArray<DeepReadonly11024<T>> {}

type DeepReadonlyObject11024<T> = {
  readonly [P in keyof T]: DeepReadonly11024<T[P]>;
};

type UnionToIntersection11024<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11024<T> = UnionToIntersection11024<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11024<T extends unknown[], V> = [...T, V];

type TuplifyUnion11024<T, L = LastOf11024<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11024<TuplifyUnion11024<Exclude<T, L>>, L>;

type DeepPartial11024<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11024<T[P]> }
  : T;

type Paths11024<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11024<K, Paths11024<T[K], Prev11024[D]>> : never }[keyof T]
  : never;

type Prev11024 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11024<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11024 {
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

type ConfigPaths11024 = Paths11024<NestedConfig11024>;

interface HeavyProps11024 {
  config: DeepPartial11024<NestedConfig11024>;
  path?: ConfigPaths11024;
}

const HeavyComponent11024 = memo(function HeavyComponent11024({ config }: HeavyProps11024) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11024) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11024 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11024: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11024.displayName = 'HeavyComponent11024';
export default HeavyComponent11024;
