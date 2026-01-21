'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14628<T> = T extends (infer U)[]
  ? DeepReadonlyArray14628<U>
  : T extends object
  ? DeepReadonlyObject14628<T>
  : T;

interface DeepReadonlyArray14628<T> extends ReadonlyArray<DeepReadonly14628<T>> {}

type DeepReadonlyObject14628<T> = {
  readonly [P in keyof T]: DeepReadonly14628<T[P]>;
};

type UnionToIntersection14628<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14628<T> = UnionToIntersection14628<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14628<T extends unknown[], V> = [...T, V];

type TuplifyUnion14628<T, L = LastOf14628<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14628<TuplifyUnion14628<Exclude<T, L>>, L>;

type DeepPartial14628<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14628<T[P]> }
  : T;

type Paths14628<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14628<K, Paths14628<T[K], Prev14628[D]>> : never }[keyof T]
  : never;

type Prev14628 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14628<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14628 {
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

type ConfigPaths14628 = Paths14628<NestedConfig14628>;

interface HeavyProps14628 {
  config: DeepPartial14628<NestedConfig14628>;
  path?: ConfigPaths14628;
}

const HeavyComponent14628 = memo(function HeavyComponent14628({ config }: HeavyProps14628) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14628) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14628 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14628: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14628.displayName = 'HeavyComponent14628';
export default HeavyComponent14628;
