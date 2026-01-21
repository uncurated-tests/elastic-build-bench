'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14024<T> = T extends (infer U)[]
  ? DeepReadonlyArray14024<U>
  : T extends object
  ? DeepReadonlyObject14024<T>
  : T;

interface DeepReadonlyArray14024<T> extends ReadonlyArray<DeepReadonly14024<T>> {}

type DeepReadonlyObject14024<T> = {
  readonly [P in keyof T]: DeepReadonly14024<T[P]>;
};

type UnionToIntersection14024<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14024<T> = UnionToIntersection14024<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14024<T extends unknown[], V> = [...T, V];

type TuplifyUnion14024<T, L = LastOf14024<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14024<TuplifyUnion14024<Exclude<T, L>>, L>;

type DeepPartial14024<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14024<T[P]> }
  : T;

type Paths14024<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14024<K, Paths14024<T[K], Prev14024[D]>> : never }[keyof T]
  : never;

type Prev14024 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14024<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14024 {
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

type ConfigPaths14024 = Paths14024<NestedConfig14024>;

interface HeavyProps14024 {
  config: DeepPartial14024<NestedConfig14024>;
  path?: ConfigPaths14024;
}

const HeavyComponent14024 = memo(function HeavyComponent14024({ config }: HeavyProps14024) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14024) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14024 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14024: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14024.displayName = 'HeavyComponent14024';
export default HeavyComponent14024;
