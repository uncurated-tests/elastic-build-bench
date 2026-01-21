'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14469<T> = T extends (infer U)[]
  ? DeepReadonlyArray14469<U>
  : T extends object
  ? DeepReadonlyObject14469<T>
  : T;

interface DeepReadonlyArray14469<T> extends ReadonlyArray<DeepReadonly14469<T>> {}

type DeepReadonlyObject14469<T> = {
  readonly [P in keyof T]: DeepReadonly14469<T[P]>;
};

type UnionToIntersection14469<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14469<T> = UnionToIntersection14469<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14469<T extends unknown[], V> = [...T, V];

type TuplifyUnion14469<T, L = LastOf14469<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14469<TuplifyUnion14469<Exclude<T, L>>, L>;

type DeepPartial14469<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14469<T[P]> }
  : T;

type Paths14469<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14469<K, Paths14469<T[K], Prev14469[D]>> : never }[keyof T]
  : never;

type Prev14469 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14469<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14469 {
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

type ConfigPaths14469 = Paths14469<NestedConfig14469>;

interface HeavyProps14469 {
  config: DeepPartial14469<NestedConfig14469>;
  path?: ConfigPaths14469;
}

const HeavyComponent14469 = memo(function HeavyComponent14469({ config }: HeavyProps14469) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14469) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14469 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14469: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14469.displayName = 'HeavyComponent14469';
export default HeavyComponent14469;
