'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14084<T> = T extends (infer U)[]
  ? DeepReadonlyArray14084<U>
  : T extends object
  ? DeepReadonlyObject14084<T>
  : T;

interface DeepReadonlyArray14084<T> extends ReadonlyArray<DeepReadonly14084<T>> {}

type DeepReadonlyObject14084<T> = {
  readonly [P in keyof T]: DeepReadonly14084<T[P]>;
};

type UnionToIntersection14084<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14084<T> = UnionToIntersection14084<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14084<T extends unknown[], V> = [...T, V];

type TuplifyUnion14084<T, L = LastOf14084<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14084<TuplifyUnion14084<Exclude<T, L>>, L>;

type DeepPartial14084<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14084<T[P]> }
  : T;

type Paths14084<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14084<K, Paths14084<T[K], Prev14084[D]>> : never }[keyof T]
  : never;

type Prev14084 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14084<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14084 {
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

type ConfigPaths14084 = Paths14084<NestedConfig14084>;

interface HeavyProps14084 {
  config: DeepPartial14084<NestedConfig14084>;
  path?: ConfigPaths14084;
}

const HeavyComponent14084 = memo(function HeavyComponent14084({ config }: HeavyProps14084) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14084) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14084 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14084: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14084.displayName = 'HeavyComponent14084';
export default HeavyComponent14084;
